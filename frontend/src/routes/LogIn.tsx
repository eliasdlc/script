
import LogInIcon from "../assets/LogInIcon.tsx";


export default function LogIn(){

    return(
        <div className={"bg-[#DEE9ED] flex p-15 w-full h-full rounded-2xl"}>
            <div className={"login-bg backdrop-blur-blur flex w-full h-full justify-center items-center shadow rounded-2xl"}>

                <div
                    className={"w-[360px] h-[460px] p-[20px] rounded-2xl border-2 login-panel-bg login-panel-shadow backdrop-blur-blur-blur border-white flex-col justify-start items-center gap-2.5 inline-flex overflow-hidden"}>
                    <div className={"w-fill h-[110px] items-center justify-center border-3 border-white"}>
                        <div
                            className="h-[90px] p-2.5 bg-white/50 rounded-[32px] border-2 border-white flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
                            <LogInIcon color={"#264165"}></LogInIcon>
                        </div>
                    </div>

                    <div
                        className="self-stretch h-[70px] p-2.5 flex-col justify-center items-center gap-[5px] flex">
                        <label className="text-[#152337] text-2xl font-bold font-['Inter']">Sing In with email</label>
                        <p className="text-[#152337]/50 text-sm font-semibold font-['Inter']">Create a workspace to
                            organize your ideas!
                        </p>
                    </div>

                    <div
                        className="h-[259px] p-2.5 flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden">
                        <input className="h-[50px] w-[300px] p-2 bg-[#D5E5EE] rounded-2xl font-['Inter'] font-thin " placeholder={"example@website.com"}></input>
                        <input className="h-[50px] w-[300px] p-2 bg-[#D5E5EE] rounded-2xl font-['Inter'] font-thin " placeholder={"password"}></input>
                        <button
                            className="self-stretch text-center text-[#152337]/25 text-sm font-normal font-['Inter']">Forgot
                            password?
                        </button>
                        <div
                            className="self-stretch h-[60px] w-[300px] p-2.5 getstarted-bg rounded-2xl justify-center items-center gap-2.5 inline-flex overflow-hidden">
                            <button className="text-center text-[#eff9ff] text-xl font-bold font-['Inter']">Get Started
                            </button>
                        </div>
                        <button
                            className="self-stretch grow shrink basis-0 text-center text-[#152337]/50 text-base font-medium font-['Inter']">Already
                            got an account?
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}