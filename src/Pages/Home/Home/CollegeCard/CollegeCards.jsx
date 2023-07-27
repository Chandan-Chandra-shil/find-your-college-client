
import CollegeCard from "./CollegeCard";

const CollegeCards = ({ colleges }) => {
  // console.log("5........ from collegeCards", colleges);
  return (
    <section className="md:mx-4 lg:mx-0 mx-4 my-container">
      <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
        {colleges?.slice(0, 3).map((college) => (
          <CollegeCard key={college?._id} college={college}></CollegeCard>
        ))}
      </div>
    </section>
  );
};

export default CollegeCards;
