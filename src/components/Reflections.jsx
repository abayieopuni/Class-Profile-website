import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

const Reflections = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [reflections, setReflections] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedMessage, setEditedMessage] = useState('');

  const reflectionsRef = collection(db, 'reflections');

  const loadReflections = async () => {
    const snapshot = await getDocs(reflectionsRef);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setReflections(data.reverse());
  };

  useEffect(() => {
    loadReflections();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) return;

    await addDoc(reflectionsRef, {
      name,
      message,
      createdAt: Date.now(),
    });

    setName('');
    setMessage('');
    loadReflections();
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'reflections', id));
      loadReflections();
    } catch (error) {
      console.error('Failed to delete reflection:', error);
      alert('Error deleting. Check Firebase permissions.');
    }
  };

  const handleSaveEdit = async (id) => {
    try {
      await updateDoc(doc(db, 'reflections', id), {
        message: editedMessage,
      });
      setEditingId(null);
      setEditedMessage('');
      loadReflections();
    } catch (error) {
      console.error('Failed to update reflection:', error);
      alert('Could not save edit. Check console for details.');
    }
  };

  return (
    <section className="bg-white py-12 px-4 text-[#00308F]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 tracking-tight">
          Reflections & Messages
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#f8fafc] border border-[#00308F]/20 rounded-xl shadow-sm p-6 mb-12 space-y-5 max-w-3xl mx-auto"
        >
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 border rounded-md border-[#00308F]/40 focus:ring-2 focus:ring-[#00308F] focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Your quote or message"
            className="w-full px-4 py-3 border rounded-md border-[#00308F]/40 h-28 resize-none focus:ring-2 focus:ring-[#00308F] focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#00308F] text-white px-6 py-3 rounded-md hover:bg-[#072f5f] transition w-full sm:w-auto"
          >
            Submit
          </button>
        </form>

        {/* Reflections Grid */}
        {reflections.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            No reflections yet.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reflections.map((entry) => (
              <div
                key={entry.id}
                className="bg-[#F0F4FA] rounded-xl p-5 shadow-md relative group transition-transform duration-200 hover:scale-[1.02]"
              >
                {editingId === entry.id ? (
                  <>
                    <textarea
                      className="w-full p-3 border border-[#00308F]/40 rounded-md mb-3 resize-none"
                      value={editedMessage}
                      onChange={(e) => setEditedMessage(e.target.value)}
                    />
                    <div className="flex justify-end space-x-3 text-sm">
                      <button
                        onClick={() => handleSaveEdit(entry.id)}
                        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="text-red-600 hover:underline"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-base md:text-lg font-medium italic text-[#001F5B] mb-3">
                      “{entry.message}”
                    </p>
                    <p className="text-sm font-semibold text-right text-[#00308F]">
                      – {entry.name}
                    </p>
                    <div className="absolute top-3 right-3 flex gap-2 text-xs opacity-0 group-hover:opacity-100 transition">
                      <button
                        onClick={() => {
                          setEditingId(entry.id);
                          setEditedMessage(entry.message);
                        }}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(entry.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Reflections;
