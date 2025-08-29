import React, { useEffect, useState } from "react";

const Submissions = () => {
  const [contacts, setContacts] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch contact submissions
        const contactRes = await fetch("http://localhost:5000/api/contact");
        const contactData = await contactRes.json();
        setContacts(contactData);

        // Fetch resume submissions
        const resumeRes = await fetch("http://localhost:5000/api/resume");
        const resumeData = await resumeRes.json();
        setResumes(resumeData);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching submissions:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <span className="text-lg text-gray-500 animate-pulse">
          Loading submissions...
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-3xl font-bold text-center mb-10 text-[#2D6FBA]">
          📋 Form Submissions
        </h1>

        {/* Contact Submissions */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-[#2D6FBA] flex items-center gap-2">
            <svg
              className="w-6 h-6 text-[#2D6FBA]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            > 
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4"
              />
            </svg>
            Contact Form Submissions
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg text-sm">
              <thead className="bg-[#2D6FBA]/10">
                <tr>
                  <th className="p-3 border font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="p-3 border font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="p-3 border font-semibold text-gray-700">
                    Phone
                  </th>
                  <th className="p-3 border font-semibold text-gray-700">
                    Department
                  </th>
                  <th className="p-3 border font-semibold text-gray-700">
                    Message
                  </th>
                  <th className="p-3 border font-semibold text-gray-700">
                    Callback
                  </th>
                </tr>
              </thead>
              <tbody>
                {contacts.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-6 text-gray-400"
                    >
                      No contact submissions found.
                    </td>
                  </tr>
                ) : (
                  contacts.map((c) => (
                    <tr
                      key={c._id}
                      className="hover:bg-[#2D6FBA]/5 transition"
                    >
                      <td className="p-3 border">{c.name}</td>
                      <td className="p-3 border">{c.email}</td>
                      <td className="p-3 border">{c.phone}</td>
                      <td className="p-3 border">{c.department}</td>
                      <td className="p-3 border">{c.message}</td>
                      <td className="p-3 border text-center">
                        {c.callback ? (
                          <span className="text-green-600 font-bold">Yes</span>
                        ) : (
                          <span className="text-red-500 font-bold">No</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Resume Submissions */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-[#2D6FBA] flex items-center gap-2">
            <svg
              className="w-6 h-6 text-[#2D6FBA]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 21v-2a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v13"
              />
            </svg>
            Resume Submissions
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg text-sm">
              <thead className="bg-[#2D6FBA]/10">
                <tr>
                  <th className="p-3 border font-semibold text-gray-700">
                    Full Name
                  </th>
                  <th className="p-3 border font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="p-3 border font-semibold text-gray-700">
                    Phone
                  </th>
                  <th className="p-3 border font-semibold text-gray-700">
                    Message
                  </th>
                  <th className="p-3 border font-semibold text-gray-700">
                    Resume
                  </th>
                </tr>
              </thead>
              <tbody>
                {resumes.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center py-6 text-gray-400"
                    >
                      No resume submissions found.
                    </td>
                  </tr>
                ) : (
                  resumes.map((r) => (
                    <tr
                      key={r._id}
                      className="hover:bg-[#2D6FBA]/5 transition"
                    >
                      <td className="p-3 border">{r.fullName}</td>
                      <td className="p-3 border">{r.email}</td>
                      <td className="p-3 border">{r.phone}</td>
                      <td className="p-3 border">{r.message}</td>
                      <td className="p-3 border text-center">
                        {r.resumePath ? (
                          <a
                            href={`http://localhost:5000${r.resumePath}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2D6FBA] underline font-medium hover:text-blue-700"
                          >
                            View Resume
                          </a>
                        ) : (
                          <span className="text-gray-400">No File</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Submissions;
