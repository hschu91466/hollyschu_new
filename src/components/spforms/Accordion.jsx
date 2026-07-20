import { useState } from "react";

// Simple single-open-at-a-time accordion. Pass items as
// [{ id, title, children }]. No external JS dependency (Bootstrap's
// accordion needs its JS bundle; this avoids adding that for one page).
const Accordion = ({ items }) => {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div className="accordion-item" key={item.id}>
            <h3 className="accordion-heading">
              <button
                type="button"
                className="accordion-toggle"
                aria-expanded={isOpen}
                aria-controls={`panel-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                {item.title}
              </button>
            </h3>
            <div
              id={`panel-${item.id}`}
              className="accordion-panel"
              hidden={!isOpen}
            >
              {item.children}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
