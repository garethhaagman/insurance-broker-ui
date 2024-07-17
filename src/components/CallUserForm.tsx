import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

function CallUserForm() {
    const baseUrl = process.env.BASE_URL;
    const callUrl = `https://testudo-insurance-broker-6a3e106e42a6.herokuapp.com/telephone`;
    const [fullName, setFullName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(callUrl, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName: fullName,
                    companyName: companyName,
                    phoneNumber: `+${phoneNumber}`
                }),
            });
            if (res.status === 201) {
                setFullName("");
                setCompanyName("");
                setPhoneNumber("");
                setMessage("Call placed successfully");
            } else {
                setMessage("Failed to place call");
            }
        } catch (err) {
            console.log(err);
            setMessage("An error occurred. Please try again.");
        }
    };

    return (
        <><form onSubmit={handleSubmit} className='bg-testudo-dark px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <label className='block text-white text-sm font-bold mb-2'>
            What's your name?
          </label>
          <input
            required
            type="text"
            id='fullName'
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 placeholder-gray-500 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Marcus Aurelius' />
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm font-bold mb-2'>
            Where do you work?
          </label>
          <input
            required
            type="text"
            id='companyName'
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 placeholder-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='OpenAI' />
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm font-bold mb-2'>
            What's your phone number?
          </label>
          <PhoneInput
                    value={phoneNumber}
                    onChange={(value) => setPhoneNumber(value)}
                    inputProps={{
                        id: "phoneNumber",
                        name: "phoneNumber",
                        required: true,
                        className: "shadow appearance-none border rounded w-full indent-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    }}
                    placeholder='+44123-456-789'
                    country={'gb'} />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-testudo-purple text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'>
            Talk to me!
          </button>
        </div>
      </form>
      <div className="block text-center text-gray-700 text-sm font-bold">{message ? <p>{message}</p> : null}</div></>
    );
}

export default CallUserForm;
