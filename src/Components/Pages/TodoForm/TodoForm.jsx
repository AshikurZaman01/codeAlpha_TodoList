import { motion } from "framer-motion";

const TodoForm = ({ closeModal }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -20 }}
         className="p-6 bg-white rounded-lg shadow-lg w-96"
      >
         <h2 className="text-xl font-bold mb-4">Add New Todo</h2>
         <input type="text" placeholder="Enter your todo..." className="input input-bordered w-full mb-4" />
         <div className="flex justify-end gap-2">
            <button className="btn btn-ghost" onClick={closeModal}>Cancel</button>
            <button className="btn btn-primary">Add Todo</button>
         </div>
      </motion.div>
   )
}

export default TodoForm