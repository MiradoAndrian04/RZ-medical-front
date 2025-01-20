

function UserProfileEdit() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray text-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">User Profile Edit</h2>
        
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <img
                  src="/img/auto.png" // Replace with user image
              alt="User Icon"
              className="w-24 h-24 rounded-full border-4 border-gray-700"
            />
            <button
              className="absolute top-0 right-0 bg-red-500 w-6 h-6 rounded-full flex items-center justify-center text-white"
              title="Remove Icon"
            >
              &times;
            </button>
          </div>
        </div>
        
        <button className="w-full bg-gray-700 text-white py-2 rounded mb-6 hover:bg-gray-600">
          Change Icon
        </button>

        {/* Form Section */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="username">
              User name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              placeholder="UserName"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="your-email@example.com"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfileEdit;
