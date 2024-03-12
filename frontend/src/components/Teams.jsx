import { teamData } from "../Arrays.js";


const Teams = () => {
    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold">Team</h1>
            <p className="mt-5 font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur officia voluptatibus blanditiis enim est accusamus numquam labore eos consectetur assumenda ullam earum sit autem illum dicta dolor neque, non eius!
            </p>
            <div className="flex flex-col gap-5 my-5 ">
                {teamData.map((member, id) => (
                    <div key={id} className="flex gap-8 bg-blue-400/10 rounded-lg py-5 px-8">
                        <div className="flex flex-col text-nowrap items-center">
                            <img src={member.image} alt={member.name} className="rounded-lg" />
                            <h2 className="text-lg mt-2 font-semibold">{member.name}</h2>
                            <p className=" text-gray-400">{member.designation}</p>
                        </div>
                        <div className="text-lg text-wrap flex items-center">
                            {member.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Teams;