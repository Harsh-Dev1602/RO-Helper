
import React from 'react'
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


function ContactForm() {

  const { register, handleSubmit, reset, formState: { errors ,isSubmitSuccessful } } = useForm();


  const sendToWhatsapp = (name, number, message,suggestion) => {
    let phoneNumber = "+919926052876"; 
    let url = `https://wa.me/${phoneNumber}?text=
    Name: ${name}%0a
    Number: ${number}%0a
    Message: ${message}%0a%0a
    Suggestion: ${suggestion}%0a
    `;
    
    setTimeout(() => {
    window.open(url, '_blank');    }, 2000); 
}


  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      number: data.number,
      message: data.message,
      suggestion: data.suggestion,
    }
      
      try {
      
        toast.success("Your message has been send");
      
        sendToWhatsapp(userInfo.name, userInfo.number, userInfo.message,userInfo.suggestion); 
  
      }
      catch (error) {
        console.log(error);
        toast.error("Something went wrong")
      }

  }

  
  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <main name="Contact Us" className="S w-full bg-blue-100  h-auto  p-5   rounded-2xl rounded-bl-[100px]  mt-5" >

        <section className="mt-5">
          
          <form onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 my-10 bg-white S rounded-2xl p-5 mx-auto   md:w-[40%] ">
            <div className="text-2xl font-semibold">Send Your Message</div>
            <div>
              <label htmlFor="name" className="block text-lg">Name</label>
              <input name="name" {...register("name", { required: true })} type="text" id="name" placeholder=' Please enter a fullname..' className=" bg-white text-black w-full p-3 border border-gray-300 rounded-md  outline-none" />
              {errors.name && <span className="text-red-500 font-bold pl-2.5">This field is required</span>}
            </div>
            <div>
              <label htmlFor="number" className="block text-lg"> Mobile Number</label>
              <input name="number" {...register("number", { required: true })} type="number" placeholder=' Please enter a mobile number..' id="number" className="  bg-white text-black w-full p-3 border border-gray-300 rounded-md outline-none" />
              {errors.number && <span className="text-red-500 font-bold pl-2.5">This field is required</span>}
            </div>
            <div>
              <label htmlFor="message" className="block text-lg">Message</label>
              <textarea name="message" {...register("message", { required: true })} id="message" placeholder=' Enter your Query..' className="  bg-white text-black  w-full min-h-30 p-3 border border-gray-300 rounded-md outline-none"></textarea>
              {errors.message && <span className="text-red-500 font-bold pl-2.5">This field is required</span>}
            </div>
            <div>
              <label htmlFor="suggestion" className="block text-lg">Suggestion</label>
              <textarea name="suggestion" {...register("suggestion", { required: true })} id="suggestion" placeholder=' Give your suggestion..' className="  bg-white text-black  w-full min-h-30 p-3 border border-gray-300 rounded-md outline-none"></textarea>
              {errors.suggestion && <span className="text-red-500 font-bold pl-2.5">This field is required</span>}
            </div>
            <button type="submit" className="bg-blue-600 cursor-pointer hover:bg-blue-400 text-white p-3 rounded-2xl font-semibold">Send Message</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default ContactForm