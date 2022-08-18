import DefaultLayout from '../src/layouts/default'
import ExperienceItem from '../src/components/Experiences/ExperienceItem'


export default function Home() {
  return (
        <DefaultLayout>
        <div className="w-full md:w-4/5 lg:w-2/3 md:mx-auto flex flex-col md:flex-row pt-20 md:pt-40 h-screen md:text-left px-3 md:px-0">
            <div className="w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0 pb-10">
                <p className="text-4xl text-gray-500 font-bold text-center">Work Life</p>
                <hr className="w-1/2 mx-auto"></hr>
                <ExperienceItem title="IKEA" period="Sales | June 2022 - Current" content="Seasonal/temp employment as seller at the light, curtains and carpet departments. My main responsibility is making sure that all customers gets a pleasent visit and keep the store tidy." image="ikea"/>
                    <ExperienceItem title="Consid" period="Student Ambassador | Mars 2022 - Current" content="I arrange student meetings and represents Consid at student events. The work includes a lot of social networking." image="consid"/>
                    <ExperienceItem title="EQ Web Solutions AB" period="CEO, Developer | Mars 2020 - Current" content="My own company where I offer development of webapplications to small companies and individuals. I also offer hosting and support for all of my customers. The business is not big, just something that I have been doing along side my studies." image="eqweb"/>
                    <ExperienceItem title="Mälardalens University" period="Teacher Assistant | November 2020 - Januari 2022" content="I was a teacher assistant in the course 'Datastructures and Algoritms'. My responsibility was mostly guiding the students towards correct implementations of well known algorithms and datastructures in C." image="mdu"/>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
                <p className="text-4xl text-gray-500 font-bold text-center">Education</p>
                <hr className="w-1/2 mx-auto"></hr>
                <div className="px-3">
                    <ExperienceItem title="Mälardalens University" period="August 2019 - Juli 2022" content="Bachelor's in Computer Science. The program included a wide range of courses, to mention a few: Databases, Object oriented programming, Web development, Mobile app development, Computer architecture, Software engineering, Web security and many more..." image="mdu"/>
                </div>
            </div>
            </div>
        </DefaultLayout>
  )
}