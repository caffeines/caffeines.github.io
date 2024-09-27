import React, { useState } from "react";
import { articles } from "../configs";
import moment from "moment";
import { Link } from 'next/link';
const MAX_TAGS = 9;

const ArticleCard = ({ title, publishedDate, readTime, tags, shortInfo, url }) => (
  <div 
  onClick={() => window.open(url)}
  className="bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700 transition ease-in-out delay-150 hover:border-dashed hover:dark:bg-black hover:bg-slate-100 p-6 mb-6 flex flex-col justify-between cursor-pointer">
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <div className="flex items-center text-sm text-gray-400 mb-4">
        <span>{moment(publishedDate, "DD-MM-YYYY").format("MMMM D, YYYY")}</span>
        <span className="mx-2">•</span>
        <span>{readTime} min read</span>
      </div>
      <p className="text-gray-300">{shortInfo}</p>
    </div>
      <div className="mt-6">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
  </div>
);

const TagModal = ({ tags, onClose, onSelectTag }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">All Tags</h2>
      <div className="flex flex-wrap">
        {tags.map(tag => (
          <button
            key={tag.name}
            onClick={() => {
              onSelectTag(tag.name);
              onClose();
            }}
            className="mr-2 mb-2 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
          >
            {tag.name} ({tag.count})
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

const Articles = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const sortedArticles = [...articles].sort((a, b) => {
    const dateA = new Date(a.publishedDate.split('-').reverse().join('-'));
    const dateB = new Date(b.publishedDate.split('-').reverse().join('-'));
    return dateB - dateA;
  });

  const allTags = sortedArticles.reduce((acc, article) => {
    article.tags.forEach(tag => {
      if (acc[tag]) {
        acc[tag]++;
      } else {
        acc[tag] = 1;
      }
    });
    return acc;
  }, {});

  const sortedTags = Object.entries(allTags)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  const displayedTags = sortedTags.slice(0, MAX_TAGS);

  const filteredArticles = selectedTag === "All" 
    ? sortedArticles 
    : sortedArticles.filter(article => article.tags.includes(selectedTag));

  return (
    <div className="container px-4 mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Articles</h1>
      <div className="mb-6">
        <button
          onClick={() => setSelectedTag("All")}
          className={`mr-2 mb-2 px-3 py-1 rounded-full ${selectedTag === "All" ? "bg-black-600 text-white outline outline-gray-600" : "bg-gray-700 text-gray-300"}`}
        >
          All
        </button>
        {displayedTags.map(tag => (
          <button
            key={tag.name}
            onClick={() => setSelectedTag(tag.name)}
            className={`mr-2 mb-2 px-3 py-1 rounded-full ${selectedTag === tag.name ? "bg-black-600 text-white outline outline-gray-600" : "bg-gray-700 text-gray-300"}`}
          >
            {tag.name} ({tag.count})
          </button>
        ))}
        {sortedTags.length > MAX_TAGS && (
          <button
            onClick={() => setShowModal(true)}
            className="mr-2 mb-2 px-3 py-1 rounded-full bg-gray-700 text-gray-300"
          >
            Show More
          </button>
        )}
      </div>
      <div className="space-y-6">
        {filteredArticles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      {showModal && (
        <TagModal
          tags={sortedTags}
          onClose={() => setShowModal(false)}
          onSelectTag={setSelectedTag}
        />
      )}
    </div>
  );
};

export default Articles;