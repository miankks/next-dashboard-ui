"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../inputField";
import Image from "next/image";

const schema = z.object({
    username: z.string().min(3, {message: "Username must be atleast 3 characters long!"})
                        .max(20, {message: "Username must be atmost 20 characters long!"}),
    email: z.string().email({message: "Invalid  email address!"}),
    password: z.string().min(8, {message: "Passwoord must be atleast 8 characters long!"}),
    firstName: z.string().min(1, {message: "First name is required!"}),
    lastName: z.string().min(1,{message: "Last name is required!"}).optional(),
    phone: z.string().min(1, {message: "Phone is required!"}),
    address: z.string().min(1, {message: "Address is required!"}),
    bloodType: z.string().min(1, {message: "Blood type is required!"}),
    birthday: z.date({message: "Birthday is required!"}),
    sex: z.enum(["male", "female"], {message: "Sex is required"}),
    img: z.instanceof(File, {message: "Image is required"})
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({ 
    type, data
    } : {
        type: "create" | "update"; data?: any;
    }) => {

        const {
            register,
            handleSubmit,
            formState: {errors},
        } = useForm<Inputs>({
            resolver:zodResolver(schema)
        })

    const onSubmit = handleSubmit((data) => {
        console.log('data', data)
    })

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
        <h1 className="text-xl font-semibold">Creatte a new teacher</h1>
        <span className="text-xs text-gray-400 font-medium">Authentication Information</span>
        <div className="flex justify-between flex-wrap gap-4">
            <InputField 
                label="username"
                name="username"
                defaultValue={data?.username}
                register={register}
                error={errors?.username}
            />
            <InputField 
                label="Email"
                name="email"
                type="email"
                defaultValue={data?.email}
                register={register}
                error={errors?.email}
            />
            <InputField 
                label="Password"
                name="password"
                type="password"
                defaultValue={data?.password}
                register={register}
                error={errors?.password}
            />
        </div>
        <span className="text-xs text-gray-400 font-medium">Personal Information</span>
        <div className="flex justify-between flex-wrap gap-4">
            <InputField 
                label="First Name"
                name="firstName"
                defaultValue={data?.firstName}
                register={register}
                error={errors?.firstName}
            />
            <InputField 
                label="Last Name"
                name="lastName"
                defaultValue={data?.lastName}
                register={register}
                error={errors?.lastName}
            />
            <InputField 
                label="Phone"
                name="phone"
                type="number"
                defaultValue={data?.phone}
                register={register}
                error={errors?.phone}
            />
            <InputField 
                label="Address"
                name="address"
                defaultValue={data?.phone}
                register={register}
                error={errors?.address}
            />
            <InputField 
                label="Blood Type"
                name="bloodType"
                type="number"
                defaultValue={data?.bloodType}
                register={register}
                error={errors?.bloodType}
            />
            <InputField 
                label="Birthday"
                name="birthday"
                defaultValue={data?.birthday}
                register={register}
                error={errors?.birthday}
                type="date"
            />
             <div className="flex flex-col gap-2 w-full md:w-1/4">
                <label className="text-xs text-gray-500">Sex</label>
               <select className="ing-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full" {...register("sex")} defaultValue={data?.sex}>
                <option value="male">Male</option>
                <option value="female">Female</option>
               </select>
                {errors?.sex && <p className="text-xs text-red-400">{errors?.sex.toString()}</p>}
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
                <label className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
                    <Image src="/upload.png" alt="" width={28} height={28}/>
                    <span>Upload a photo</span>
                </label>
               <input type="file" id="img" {...register("img")} className="hidden"/>
                {errors?.img && <p className="text-xs text-red-400">{errors?.img.toString()}</p>}
            </div>
        </div>
        <button className="bg-blue-400 text-white p-2 rounded-md">{type === "create" ? 'Create' : 'Update'}</button>
    </form>
  )
}

export default TeacherForm