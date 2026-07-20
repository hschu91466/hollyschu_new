import Accordion from "../spforms/Accordion";
import "../../styles/spforms.css";

// Content for the SharePoint Business Forms showcase.
// Images expected at /images/sp_images/<file> — see spforms.css/public
// folder for the matching image set.
const forms = [
  {
    id: "overview",
    title: "SharePoint Business Forms",
    image: "/images/sp_images/sp_intro.png",
    alt: "Overview screen of the SharePoint Business Forms hub",
    text: "The SharePoint Business forms were created in response to a requirement to get multiple signatures from people in separate locations across campus. These forms are created using InfoPath and are hosted on a SharePoint site. Each form uses a custom workflow to send email requesting signature or actions required to complete the process.",
  },
  {
    id: "inventory",
    title: "Inventory",
    image: "/images/sp_images/inventory.png",
    alt: "SharePoint inventory tracking form showing assigned equipment",
    text: "The inventory form is connected to an SQL database of equipment. The inventory is updated and maintained on a SharePoint site. Employees can see their own equipment logs. When equipment is changed, the employee is required to review and re-sign it.",
  },
  {
    id: "purchase-request",
    title: "Purchase Request",
    image: "/images/sp_images/purchase_request.png",
    alt: "Purchase request form with manager and budget authority signature fields",
    text: "The purchase request requires signatures from the manager, the director, and the budget authority. It also requires a person to code it, place the purchase and mark the order complete. There is an accompanying form for reconciliation.",
  },
  {
    id: "travel-request",
    title: "Travel Request",
    image: "/images/sp_images/travel_request.png",
    alt: "Travel request form with traveler, budget authority, and coordinator signature fields",
    text: "The travel request is filled out by the traveler. It requires signatures from the budget authority, the unit leader and the travel coordinator. There is an accompanying form to be filled out when the traveler returns.",
  },
  {
    id: "leave-request",
    title: "Leave/Overtime Request",
    image: "/images/sp_images/leave_request.png",
    alt: "Leave and overtime request form with supervisor signature field",
    text: "The leave/overtime request is filled out by the employee and signed by a backup (optional) and a supervisor (required). Once approved it appears on a SharePoint calendar. It is shown on the Time/Leave Report.",
  },
  {
    id: "time-leave-report",
    title: "Time/Leave Report",
    image: "/images/sp_images/time_leave_report.png",
    alt: "Time and leave report showing employee, supervisor, and administrator signatures",
    text: "The time/leave report shows different versions of the form dependent on employee type. It requires signatures from the employee, the supervisor, and a leave administrator.",
  },
];

const SPFormsPage = () => {
  return (
    <section id="sp-forms" className="sp-forms-section">
      <h2 className="sp-forms-heading">SharePoint Business Forms</h2>
      <p className="sp-forms-intro">
        A set of InfoPath forms built on SharePoint to route multi-step
        approvals — purchase requests, travel requests, leave, and equipment
        inventory — each with its own signature workflow.
      </p>

      <Accordion
        items={forms.map((form) => ({
          id: form.id,
          title: form.title,
          children: (
            <div className="sp-form-card">
              <img
                className="sp-form-image"
                src={form.image}
                alt={form.alt}
              />
              <p className="sp-form-text">{form.text}</p>
            </div>
          ),
        }))}
      />
    </section>
  );
};

export default SPFormsPage;
