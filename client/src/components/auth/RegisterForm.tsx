"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Mail, Phone, Home, Briefcase, Lock } from "lucide-react";

const registerSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  house: z.enum(["Red", "Blue", "Green", "Yellow"]),
  profession: z.string().min(2, "Please enter your profession"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type RegisterInputs = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterInputs) => {
    try {
      // Real API call to the Node.js backend
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, graduationYear: 2006 }),
      });
      if (response.ok) alert("Application submitted for Admin approval!");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Alumni Profile</h2>
      
      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input {...register("fullName")} className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="Firstname Lastname" />
          </div>
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input {...register("email")} className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="email@example.com" />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input {...register("phone")} className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="+234..." />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* House */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">FGC House</label>
            <div className="relative">
              <Home className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select {...register("house")} className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none bg-white outline-none focus:ring-2 focus:ring-green-500">
                <option value="Red">Red House</option>
                <option value="Blue">Blue House</option>
                <option value="Green">Green House</option>
                <option value="Yellow">Yellow House</option>
              </select>
            </div>
          </div>

          {/* Profession */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input {...register("profession")} className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="e.g. Software Engineer" />
            </div>
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input type="password" {...register("password")} className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
          </div>
        </div>

        <button 
          disabled={isSubmitting}
          className="w-full bg-[#006837] text-white py-3 rounded-lg font-bold hover:bg-green-800 transition-all shadow-lg mt-4 disabled:bg-gray-400"
        >
          {isSubmitting ? "Processing..." : "Register Account"}
        </button>
      </div>
    </form>
  );
}