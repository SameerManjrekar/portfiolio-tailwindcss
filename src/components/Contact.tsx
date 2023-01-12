import { contacts } from "../data";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="container mx-auto mb-7 px-6" id="contact">
      <div className="mb-8">
        <div className="text-[1.5rem] font-bold">Contact</div>
        <div className="w-14 h-[3px] bg-blue rounded-md"></div>
      </div>
      <div className="shadow-lg p-4 w-max-[700px] mx-auto">
        <div className="grid gap-8 sm:grid-cols-3">
          {contacts.map((contact) => {
            const { id, text, icon } = contact;
            return (
              <div key={id} className="flex items-center gap-2 flex-col">
                <div className="text-blue text-xl">{icon}</div>
                <div className="text-[0.9rem] opacity-80">{text}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-12">
          <div>
            <div className="mb-5">
              <input
                type="text"
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem] rounded-md"
                placeholder="Name"
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem] rounded-md"
                placeholder="Email"
              />
            </div>
            <div className="mb-5">
              <input
                type="number"
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem] rounded-md"
                placeholder="Budget"
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Project Description"
              className="outline-none bg-transparent border border-solid border-blue resize-none h-40 w-80 p-2 text-[0.9rem] rounded-md"
            ></textarea>
            <div className="mt-2 text-end">
              <a href="" className="text-[0.9rem] text-blue">
                Send message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
