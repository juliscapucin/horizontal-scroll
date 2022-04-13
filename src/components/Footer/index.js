import "./style.scss";

const addresses = [
  {
    town: "Amsterdam",
    address: "Ferguustraat 12-2 1055SW, Amsterdam, Netherlands",
    phone: "+31 6 2757 6087",
    email: "hello@juliscapucin.com",
  },
  {
    town: "London",
    address: "10 Downing Street SW1A 2AA, London, United Kingdom",
    phone: "+42 6 2798 5432",
    email: "london@juliscapucin.com",
  },
  {
    town: "Paris",
    address: "33 Place Du Planet, Paris, France",
    phone: "+55 2 6354 6352",
    email: "paris@juliscapucin.com",
  },
];

function Footer() {
  return (
    <footer className='footer' data-scroll data-scroll-speed={-7}>
      <div className='address'>
        {addresses.map((address) => {
          return (
            <div className='address-item' key={address.town}>
              <h3>{address.town}</h3>
              <div className='street-address'>
                {address.address.split(",").map((item) => {
                  return <p key={item}>{item}</p>;
                })}
              </div>
              <p>{address.phone}</p>
              <p>{address.email}</p>
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
