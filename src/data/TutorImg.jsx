import '../style/Tutors.css'

function TutorImg(props) {
  return (
    <div className="tutor-list">
    {
        props.tutorList.map((item,index) =>{
            return(
                <div className="kartu-tutor" key={index}>
                    <img src={item.Image} />
                    <p>{item.Nama}</p>
                </div>
            )
        }) 

    }
</div>
  )
}

export default TutorImg
