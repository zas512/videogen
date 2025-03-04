import Image from "next/image";
import avatar from "@/assets/avatar.png"; 
import plusIcon from "@/assets/plusIcon.png"; 

const ProfileWithPlus = () => {
  return (
    <>
      <div className="flex flex-col px-10">
        {/* Avatar Section */}
        <div className="flex items-center justify-center">
          <div className="relative w-32 h-32"> {/* Increased size */}
            <Image
              src={avatar}
              alt="Profile Picture"
              width={128}  // Increased width
              height={128} // Increased height
              className="rounded-full"
            />
            {/* Plus Icon */}
            <div className="absolute bottom-1 right-1 bg-blue-500 rounded-full p-2 border-2 border-white">
              <Image src={plusIcon} alt="Add Icon" width={24} height={24} />
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col mt-6">
          <p className="font-mono">First Name</p>
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-[100vh] h-12 border border-black-200 rounded-lg px-2"
          />
          <p className="font-mono mt-4">Last Name</p>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="w-[100vh] h-12 border border-black-200 rounded-lg px-2"
          />
          <p className="font-mono mt-4">Email</p>
          <input
            type="text"
            placeholder="Enter Email"
            className="w-[100vh] h-12 border border-black-200 rounded-lg px-2"
          />
          <p className="font-mono mt-4">Password</p>
          <input
            type="text"
            placeholder="Enter Password"
            className="w-[100vh] h-12 border border-black-200 rounded-lg px-2"
          />
        </div>
        <button className="bg-[#000099] text-white font-mono w-fit px-8 h-12 mt-6 rounded-lg self-center">
          Save Changes
        </button>
      </div>
    </>
  );
};

export default ProfileWithPlus;
