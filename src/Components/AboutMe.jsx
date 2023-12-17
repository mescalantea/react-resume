export const AboutMe = ({ label, description }) => (
  <>
    <section className="profile section" id="languages">
      <h2 className="section-title">Languages</h2>
      <p className="profile__description">ES 🇪🇸 (native)</p>
      <p className="profile__description">EN 🇬🇧 (professional working)</p>
    </section>
    <section className="profile section" id="profile">

      <h2 className="section-title">{label}</h2>
      {description && description.map((p, i) => (<p key={i} className="profile__description">{p}</p>))}
    </section>
  </>
);
