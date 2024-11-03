import React from "react";

function RequirementForm() {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center">
     
      <div className="bg-white/50 backdrop-blur-lg pt-0 rounded-xl shadow-lg max-w-[460px]">
        <h2 className="text-xl bg-white/70 mb-2 text-black rounded-t-xl p-4 max-w-[460px] font-semibold ">
          Connect with us
        </h2>

        <div className="p-6">
        <form className="space-y-4">
        
          <input
            type="text"
            placeholder="Full Name"
            className="w-full h-[50px] text-black p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            style={{
              border: '1px solid rgba(255, 255, 255, 1)', 
              backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full h-[50px] text-black p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            style={{
              border: '1px solid rgba(255, 255, 255, 1)', 
              backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-[50px] text-black p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            style={{
              border: '1px solid rgba(255, 255, 255, 1)', 
              backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }}
          />
          <input
            type="text"
            placeholder="Planned Event"
            className="w-full h-[50px] text-black p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            style={{
              border: '1px solid rgba(255, 255, 255, 1)', 
              backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-4 rounded-lg hover:bg-gray-800 transition"
          >
            Submit Requirement
          </button>
        </form>
        </div>

        <div className="mt-6 p-4 bg-white/50 rounded-b-xl text-gray-700 text-sm flex justify-between">
          <div>
            <p>0116 262 6556</p>
            <p>contact@athenacb.co.uk</p>
          </div>
          <div className="text-right">
            <p>Athena, Queen Street</p>
            <p>Leicester, LE1 1QD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequirementForm;
