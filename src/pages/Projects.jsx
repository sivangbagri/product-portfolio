import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import shoptogether from "../static/shoptogether.png";
import poker from "../static/poker.png";
import rapid from "../static/rapid.png";
import fitness from "../static/fitness.png";
import sh20 from "../static/sh20.png";

const projects = [
  {
    title: "🛍️ Product Improvement Strategy RapidBox.in",
    tags: ["b2c", "supply chain", "value chain", "strategy"],
    date: "October 2023",
    image: rapid,
    link: "https://drive.google.com/file/d/1HLE6DCGJClEo1Jz4qMAkJfHx8TFreyvQ/view?usp=sharing",
  },
  {
    title: "🤝 Introducing Group Buying Ecommerce in India",
    tags: ["Prioritization", "PMF", "GTM", "Ecommerce", "Gamification"],

    date: "December 2023",
    image: shoptogether,
    link: "https://drive.google.com/file/d/1i6UKmVEXavE_-juAyPZMmjSrNx7yEHzS/view?usp=sharing",
  },
  {
    title: "🎮 Improving user retention on PokerBaazi",
    tags: ["RCA", "Market Study ", "Real Money Gaming", "UI/UX"],

    date: "March 2023",
    image: poker,
    link: "https://drive.google.com/file/d/1gDAooFUJG4bNkTqs1-pXLqEjN261VqOz/view",
  },
  {
    title: "💪 Improving user retention rate on MyFitnessPal",
    tags: ["Monetization", "Retention ", "Prioritization", "UI/UX"],

    date: "April 2023",
    image: fitness,
    link: "https://drive.google.com/file/d/11UxyFXcQywFAKt3rwT5XuwPgDxWkmabG/view",
  },
  {
    title: "🥘 Crafting a personalized meal planning solution",
    tags: ["Gamification", "Success Metics ", "User", "Prioritization"],

    date: "October 2023",
    image: sh20,
    link: "https://drive.google.com/file/d/16kBoR-ichv-AXY9RLv1JWNUMmatM_558/view",
  },
];
export default function Projects() {
  return (
    <div className="grid grid-cols-3  font-poppins my-20 mx-14 gap-4">
      {projects.map((item) => {
        return (
          <Link to={item.link} target="_blank">
            <Card
              title={item.title}
              content={item.content}
              type="big"
              date={item.date}
              logo={item.image}
              key={item.title}
              tags={item.tags}
            />
          </Link>
        );
      })}
      <div className="flex justify-center mt-20">
        <Link to="https://drive.google.com/drive/folders/1_fySXqneedSR0zyZjHEPuDwS8iOVULvm?usp=drive_link">
          <p className="text-2xl hover:text-custom-text drop-shadow-lg">
            {" "}
            There are more 💗 ..{" "}
          </p>
        </Link>
      </div>
    </div>
  );
}
