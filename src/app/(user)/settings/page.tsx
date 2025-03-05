import Image from "next/image";
import avatar from "@/assets/avatar.png";
import plusIcon from "@/assets/plusIcon.png";

const ProfileWithPlus = () => {
  return (
    <div className="flex max-w-7xl flex-col items-start justify-start gap-10 px-10">
      {/* Avatar Section */}
      <div className="relative h-32 w-32">
        <Image src={avatar} alt="Profile Picture" width={128} height={128} className="rounded-full" />
        <div className="absolute bottom-0 right-0 rounded-full border-2 border-white bg-blue-500 p-2">
          <Image src={plusIcon} alt="Add Icon" width={24} height={24} />
        </div>
      </div>

      {/* Input Fields */}
      <div className="mt-6 w-full space-y-10">
        <section>
          <p className="text-2xl font-semibold">First Name</p>
          <input
            type="text"
            placeholder="Enter First Name"
            className="border-border w-full rounded-xl border px-4 py-3"
          />
        </section>
        <section>
          <p className="text-2xl font-semibold">Last Name</p>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="border-border w-full rounded-xl border px-4 py-3"
          />
        </section>
        <section>
          <p className="text-2xl font-semibold">Email</p>
          <input type="text" placeholder="Enter Email" className="border-border w-full rounded-xl border px-4 py-3" />
        </section>
        <section>
          <p className="text-2xl font-semibold">Password</p>
          <input
            type="text"
            placeholder="Enter Password"
            className="border-border w-full rounded-xl border px-4 py-3"
          />
        </section>
      </div>
      <button className="gradient-bg rounded-xl px-6 py-3 text-2xl text-white">Save Changes</button>
    </div>
  );
};

export default ProfileWithPlus;
