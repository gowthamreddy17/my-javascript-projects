document.addEventListener("DOMContentLoaded", async function () {
  const supabaseUrl = "https://pcsthmlwazfmqyjzyhuf.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjc3RobWx3YXpmbXF5anp5aHVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5NjUyNTYsImV4cCI6MjAyOTU0MTI1Nn0.dbRaLKTZhU0foK1rJDHd8r47PLPB0mGzVAoj2OhunA4";
  const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Retrieve user input from form fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      // Query Supabase to authenticate user
      const { data, error } = await supabaseClient
        .from("Login")
        .select("*")
        .eq("email_id", email)
        .eq("password", password);

      if (error) {
        console.error("Error authenticating user:", error.message);
        loginMessage.textContent = "Error authenticating user.";
      } else {
        if (data.length > 0) {
          // User authenticated successfully
          console.log("User authenticated:", data[0]);
          loginMessage.textContent = "Login successful.";
        } else {
          // Invalid credentials
          console.log("Invalid email or password.");
          loginMessage.textContent = "Invalid email or password.";
        }
      }
    } catch (error) {
      console.error("Error authenticating user:", error.message);
      loginMessage.textContent = "Error authenticating user.";
    }
  });
});

//   const loginForm = document.getElementById("loginForm");
//   const loginMessage = document.getElementById("loginMessage");

//   loginForm.addEventListener("submit", async function (event) {
//     event.preventDefault();
//     console.log(supabaseClient);
//     // const res = await supabaseClient.from("Login").select("*");

//     let { data: Login, error } = await supabaseClient.from('Login').select();

//     console.log(Login);

//     // try {
//     //   // Retrieve all data from the Login table
//     //   const { data, error } = await supabaseClient.from("Login").select('email_id');
//     //   console.log(data)

//     //   if (error) {
//     //     console.error("Error retrieving data:", error.message);
//     //     loginMessage.textContent = "Error retrieving data.";
//     //   } else {
//     //     if (data.length > 0) {
//     //       console.log("All data from Login table:", data);
//     //       loginMessage.textContent = "Data retrieved successfully.";
//     //     } else {
//     //       console.log("No data found in Login table.");
//     //       loginMessage.textContent = "No data found.";
//     //     }
//     //   }
//     // } catch (error) {
//     //   console.error("Error retrieving data:", error.message);
//     //   loginMessage.textContent = "Error retrieving data.";
//     // }
//   });
// });
