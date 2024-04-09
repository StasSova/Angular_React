import React from "react";
import css from "./Contact.module.css";

function Contact() {
  const contacts = [
    {
      department: "Отдел возврата",
      phone: "+1 123 456 7890",
      email: "return@example.com",
    },
    {
      department: "Отдел заказов",
      phone: "+1 234 567 8901",
      email: "orders@example.com",
    },
    {
      department: "Отдел поддержки",
      phone: "+1 345 678 9012",
      email: "support@example.com",
    },
    {
      department: "Отдел предложений",
      phone: "+1 456 789 0123",
      email: "suggestions@example.com",
    },
    {
      department: "Отдел продаж",
      phone: "+1 567 890 1234",
      email: "sales@example.com",
    },
  ];

  return (
    <div className={css.contactContainer}>
      <h2 className={css.title}>Контакты</h2>
      <table className={css.contactTable}>
        <thead>
          <tr>
            <th>Отдел</th>
            <th>Телефон</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.department}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
