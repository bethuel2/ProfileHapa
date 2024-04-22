import NavLayout from "./components/Navbar/NavLayout";
import Bonface from "./images/Bonface.png";
import Moha from "./images/Moha.png";
import Director from "./images/Director.png";
import Zulekha from "./images/Zulekha.png";
import Peace1 from "./images/peace1.png";
import Hapa from "./images/Hapa.png";
import Image from "next/image";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagram, FaHandshake, FaBullhorn } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GiAfrica } from "react-icons/gi";
export default function Home() {
  return (
    <NavLayout>
      <div>
        <div className="bg-gray-500 col-8 pt-2 col-md-3 pt-md-4">
          <div className="relative ">
            <Image
              src={Hapa}
              alt=""
              className=" h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 xl:h-56 xl:w-56 absolute top-11 left-9 z-10 "
            />
            <div className="opacity-40 ">
              <Image src={Peace1} alt="" className="h-45 w-full  rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <section className="px-11 bg-gray-100 p-4" id="home">
        <div>
          <div>
            <h1 className="mb-4 ml-11 mt-5 text-4xl font-semibold">About Us</h1>
            <p className="text-2xl ml-11 mt-4 mb-9">
              Horn of Africa Peace Ambassadors (HAPA) is a distinguished
              organization dedicated to promoting peace, reconciliation, and
              sustainable development in the Horn ofAfrica region. With a
              mission to foster dialogue, understanding, and collaboration among
              diverse communities, HAPA offers a range of services including
              conflict resolution, peace building programs, policy development,
              capacity building, and negotiation. Guided by core values of
              integrity, inclusivity, innovation, collaboration,and
              accountability, HAPAs team of experienced professionals works
              tirelessly tocreate meaningful experiences that contribute to the
              realization of their vision - a harmonious and prosperous Horn of
              Africa where every individuals potential is realized, conflicts
              are resolved through dialogue, and communities thrive in an
              atmosphere of inclusivity and shared prosperity.
            </p>
          </div>
          <div>
          <Image
              src={Director}
              alt=""
              className="h-70 w-70 object-cover  float-left  hover:scale-110 transition duration-900 ease-in-out rounded-full mx-auto "
            />
            <h2 className="mb-4 ml-11 mt-5 text-4xl font-semibold">Overview of Services</h2>
            <ul className="ml-11 mt-2">
              <li className="text-2xl gap-2 flex"> <IoCheckmarkSharp /> Conflict Resolution</li>
              <li className="text-2xl gap-2 flex"><IoCheckmarkSharp />Peacebuilding Programs</li>
              <li className="text-2xl gap-2 flex"><IoCheckmarkSharp />Capacity Building</li>
              <li className="text-2xl gap-2 flex"><IoCheckmarkSharp />Negotiation</li>
              <li className="text-2xl gap-2 flex"><IoCheckmarkSharp />Policy Development</li>
              
            </ul>

          </div>
          
        </div>

        <div className=" mt-4 flex justify-center items-center">
          <div className="w-full md:w-2/3 lg:w-1/2 border p-2   ease-in-out mx-auto">
            <Image
              src={Director}
              alt=""
              className="h-70 w-70 object-cover hover:scale-110 transition duration-900 ease-in-out rounded-full mx-auto "
            />
            <h1 className="mt-4 text-4xl font-semibold text-black-500 text-center">
              Executive Director
            </h1>
            <h2 className="mt-3 text-3xl font-semibold text-blue-500 text-center">
              Mr Aweis Sheikh Yonis
            </h2>
            <h2 className="mt-3 text-2xl font-semibold text-white-400 text-center">
              Ambasador of peace:Expert in Negotiation,<br></br>Mediation,and
              Diplomacy for development.
            </h2>
            <p className=" mt-3 text-center text-2xl">
              Mr. Aweis Sheikh Yonis is a seasoned professional with over 30
              years of experience in humanitarian service, education, public
              service, peace-making, and management. With expertise in
              negotiation, problem-solving, public policy analysis, and
              diplomacy, he excels in managing and resolving disputes between
              individuals and communities.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-9 px-14  " id="about us">
        <div class="flex flex-wrap justify-center gap-4 ">
          <div class=" w-full  sm:w-1/2 md:w-1/3  lg:w-1/4 xl:w-1/4 border-4 bg-slate-600   hover:scale-105 transition duration-900 ease-in-out p-2 text-center rounded-lg py-10 px-8">
            <h1 className="text-3xl font-semibold text-white ">Mission</h1>
            <p className="text-xl  text-white font-semibold mt-5">
              To promote peace, reconciliation, and sustainable development in
              the Horn of Africa. We strive topromote dialogue, understanding,
              and collaboration among diverse communities to address conflict
              and build resilient societies.
            </p>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3  lg:w-1/4 xl:w-1/4 border-4 bg-blue-500   hover:scale-105 transition duration-900 ease-in-outtext-center rounded-lg py-10 px-8">
            <h1 className=" text-3xl font-semibold text-white">Vision</h1>
            <p className="text-xl text-white font-semibold mt-5">
              To create a harmonious and prosperous Horn of Africa where every
              individuals potential is realized, conflicts are resolved through
              dialogue, and communities thrive in an atmosphere of inclusivity
              and shared prosperity.
            </p>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3  lg:w-1/4 xl:w-1/4 border-4 bg-gray-800   hover:scale-105 transition duration-900 ease-in-outtext-center rounded-lg py-10 px-8">
            <h1 className=" text-3xl font-semibold text-white">Goals</h1>
            <p className="text-xl text-white font-semibold mt-5">
              We aim to Harmonise the Horn of Africa: Reach potential, settle
              disputes amicably, create welcoming communities, and advance
              prosperity for all.
              <h1 className=" text-2xl text-white  underline">Core Values</h1>
              <ol className="text-white">
                <li>1.Integrity</li>
                <li>2.Inclusivity</li>
                <li>3.Innovation</li>
                <li>4.Collaboration</li>
                <li>5.Accountablity</li>
              </ol>
            </p>
          </div>
        </div>
      </section>

      <section className=" md-5  bg-gray-200 px-11 mt-6" id="our team">
        <p className="text-center text-4xl my-3 font-semibold">Our Team</p>
        <div class="flex flex-wrap justify-center gap-4">
          <div class="w-full sm:w-1/2 md:w-1/3  lg:w-1/4 xl:w-1/4 border p-2">
            <div class="bg-gray-200 h-36 w-36  hover:scale-150 transition duration-900 ease-in-out rounded-full mx-auto">
              <Image
                src={Bonface}
                alt=""
                className="h-full w-full  object-cover rounded-full"
              />
            </div>
            <div className="mt-3">
              <h1 className="font-bold text-2xl">Bonface Inganga</h1>
              <h3 className="text-[18px] mt-2 text-blue-600">
                Operations and Grants Management
              </h3>
            </div>
            <div className="flex gap-3 mt-3">
              <a
                href="https://www.linkedin.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.twitter.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border xl:w-1/4 p-2">
            <div class="bg-gray-200 h-36 w-36  hover:scale-150 transition duration-900 ease-in-out rounded-full mx-auto">
              <Image
                src={Moha}
                alt=""
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <div className="mt-3">
              <h1 className="font-bold text-2xl">Mohamed Alinor</h1>
              <h3 className="text-[18px] mt-2 text-blue-600">
                Partnerships and Communication Expert
              </h3>
            </div>
            <div className="flex gap-3 mt-3">
              <a
                href="https://www.linkedin.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.twitter.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div class="w-full sm:w-1/2 border md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
            <div class="bg-gray-200 h-36 w-36  hover:scale-150 transition duration-900 ease-in-out rounded-full mx-auto">
              <Image
                src={Zulekha}
                alt=""
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <div className="mt-3">
              <h1 className="font-bold text-2xl">Zulekha Rukia</h1>
              <h3 className="text-[18px] mt-2 text-blue-600">
                Teams Cordinator
              </h3>
            </div>
            <div className="flex gap-3 mt-3">
              <a
                href="https://www.linkedin.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.twitter.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-11  bg-gray-100 p-4 mt-6" id="get involved">
        <div>
          <h1 className="mt-3 font font-semibold text-black-500 text-2xl">
            Get involved
          </h1>

          <p className=" mt-3 text-xl">
            As a member of the Horn of Africa Peace Ambassadors, you can
            influence good change in our dynamic region. By working together, we
            promote harmony, acceptance, and long-term growth. By means of
            grassroots endeavours and community involvement, we enable
            individuals to construct understanding bridges and establish a
            legacy of peace for future generations. Come hang with us now!
          </p>
          <div class="container  mt-4 mx-auto px-5">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="flex flex-col items-center">
                <GiAfrica size={40} />
                <h2 class="text-2xl font-bold mb-2">
                  <span>Who</span>&nbsp;we are
                </h2>
                <p class="text-center text-xl">
                  The core objective of HAPA is to cultivate the culture of
                  tolerance, inclusivity & peace in the horn of Africa.
                </p>
              </div>
              <div class="flex flex-col items-center">
                <FaBullhorn size={40} />
                <h2 class="text-2xl font-bold mb-2">
                  <span>Be</span>&nbsp;Our Ambassador
                </h2>
                <p class="text-center text-xl">
                  Join us and be part of the campaign towards peace as a Peace
                  Ambassador
                </p>
                <a
                  href="https://www.hapa.org"
                  class="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4 inline-flex items-center"
                >
                  <span class="mr-1">Get Started</span>
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
              <div class="flex flex-col items-center">
                <FaHandshake size={40} />
                <h2 class="text-2xl font-bold mb-2">
                  <span>Be</span>&nbsp;Our Partner
                </h2>
                <p class="text-center text-xl">
                  Be our partner and spread the message of peace in your own
                  domain.
                </p>
                <a
                  href="https://www.hapa.org"
                  class="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4 inline-flex items-center"
                >
                  <span class="mr-1">Get Started</span>
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NavLayout>
  );
}
