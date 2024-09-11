import "../style/Partner.css";

function PartnerLogo(props) {
  return (
    <div className="partner-list">
      {props.partnerList.map((item, index) => {
        return (
          <div className="kartu-partner" key={index}>
            <img src={item.image} />
          </div>
        );
      })}
    </div>
  );
}

export default PartnerLogo;
