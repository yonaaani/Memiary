import React from 'react';
import './JournalItemInList.css';
import { formatDistanceToNow } from 'date-fns';

const JournalItemInList = ({ journal }) => {
  const createdAt = journal.createdAt.toDate ? journal.createdAt.toDate() : journal.createdAt;
  return (
    <li className="journal-item">
        <div className='square-for-journals'>
          <img src={journal.coverPhoto} alt="Journal Cover" className="journal-cover-allList" />
          <div className="journal-details">
            <div className="journal-title-allList">{journal.title}</div>
            <div className="journal-pageCount-createdAt">
            <span className="journal-pageCount-allList">{journal.pageCount} pages</span>
            <span className="separator"> / </span>
            <span className="journal-createdAt">{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</span>
          </div>
          </div>
        </div>
    </li>
  );
};

export default JournalItemInList;
