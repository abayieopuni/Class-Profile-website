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

  // ⬇️ Load reflections from Firebase
  const loadReflections = async () => {
    const snapshot = await getDocs(reflectionsRef);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setReflections(data.reverse()); // newest first
  };

  useEffect(() => {
    loadReflections();
  }, []);

  // ⬇️ Submit reflection to Firebase
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

  // ⬇️ Delete reflection
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'reflections', id));
    loadReflections();
  };

  // ⬇️ Save edited reflection
  const handleSaveEdit = async (id) => {
    await updateDoc(doc(db, 'reflections', id), {
      message: editedMessage,
    });
    setEditingId(null);
    setEditedMessage('');
    loadReflections();
  };

  return (
    <section
      id="reflections"
      className="relative z-10 bg-white text-[#00308F] py-12 px-4 text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Reflections & Messages</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto mb-10 space-y-4 text-left"
      >
        <input
          type="text"
          placeholder="Your name"
          className="w-full p-3 border border-[#00308F] rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your quote or message"
          className="w-full p-3 border border-[#00308F] rounded-md h-28"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#00308F] text-white px-6 py-2 rounded-md hover:bg-[#072f5f] transition"
        >
          Submit
        </button>
      </form>

      {/* Display reflections */}
      <div className="max-w-3xl mx-auto space-y-6">
        {reflections.length === 0 ? (
          <p className="text-gray-500 italic">No reflections yet.</p>
        ) : (
          reflections.map((entry) => (
            <div
              key={entry.id}
              className="bg-[#F0F4FA] p-4 rounded-lg shadow text-left relative"
            >
              {editingId === entry.id ? (
                <>
                  <textarea
                    className="w-full p-2 border border-blue-500 rounded"
                    value={editedMessage}
                    onChange={(e) => setEditedMessage(e.target.value)}
                  />
                  <div className="flex justify-end mt-2 space-x-2">
                    <button
                      onClick={() => handleSaveEdit(entry.id)}
                      className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="text-red-500 hover:underline"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-lg italic mb-2">“{entry.message}”</p>
                  <p className="text-sm font-semibold text-right">
                    – {entry.name}
                  </p>
                  <div className="absolute top-2 right-3 flex gap-2">
                    <button
                      onClick={() => {
                        setEditingId(entry.id);
                        setEditedMessage(entry.message);
                      }}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Reflections;
