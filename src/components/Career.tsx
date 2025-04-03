import React from 'react';
import Image from 'next/image';
import apple from '../assets/apple.webp';

const Career: React.FC = () => {
  return (
    <div id="career" className="w-full bg-white text-default">
      <div className="max-w-[1240px] mx-auto p-3 md:p-6">
        <div className="w-full bg-white shadow-2xl grid md:grid-cols-2 rounded-lg">
          {/* Image Section */}
          <div className="col-span-1">
            <Image
              className="w-full md:mx-right mx-auto rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={apple}
              alt="Apple Logo"
              layout="responsive"
            />
          </div>

          {/* Content Section */}
          <div className="col-span-1 p-6">
            <h1 className="text-primary lg:text-4xl text-3xl font-light py-2 mx-auto text-center m-4 my-auto mb-8">
              Professional Experience
            </h1>

            {/* Table Headers */}
            <div className="m-5 grid grid-cols-6 text-left">
              <p className="font-bold col-span-1">Date</p>
              <p className="font-bold col-span-2">Company</p>
              <p className="font-bold col-span-3">Role</p>
            </div>

            {/* Work Experience Data */}
            {[
              { date: '2024-Current', company: 'Apple, Inc.', role: 'Senior Engineering Program Manager' },
              { date: '2021-2024', company: 'Apple, Inc.', role: 'Senior Evaluation Product Lead' },
              { date: '2019-2021', company: 'Isardigital GmbH', role: 'Product & Sales Manager' },
              { date: '2018-2021', company: 'Fabian Jaskotka', role: 'Founder & Web Developer' },
              { date: '2016-2019', company: 'Mercedes-Benz AG', role: 'Corporate Student' },
            ].map((job, index) => (
              <div
                key={index}
                className="shadow-xl rounded-lg p-5 bg-white hover:scale-105 duration-300 my-2"
              >
                <div className="grid grid-cols-6 gap-1">
                  <p className="font-normal col-span-1">{job.date}</p>
                  <p className="font-light col-span-2">{job.company}</p>
                  <p className="font-light col-span-3">{job.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;