import "./ProjectNotesPage.css";

const appFlow = [
  {
    title: "1. Client bootstrap and session recovery",
    points: [
      "client/src/main.jsx mounts the app with BrowserRouter and Redux Provider, so routing and global state are available everywhere from the first render.",
      "client/src/App.jsx immediately dispatches getMe() inside useEffect. This is the session recovery step that checks whether the browser already has a valid auth cookie.",
      "While auth is being checked, checkingAuth stays true in Redux. ProtectedRoute and PublicRoute both use that flag to avoid redirecting too early.",
      "Once getMe resolves, the app either marks the user authenticated and unlocks protected pages, or clears auth state and sends unauthenticated users to login-safe routes.",
    ],
  },
  {
    title: "2. Authentication request/response cycle",
    points: [
      "Login and signup both hit the Express API through the shared axios instance in client/src/API/axios.js.",
      "That axios instance has withCredentials: true, which is the key reason cookie-based authentication works across frontend and backend.",
      "On success, the backend creates a JWT with a 7-day expiry and sets it as a httpOnly token cookie, so frontend JavaScript does not need to store the token manually.",
      "Later requests to protected endpoints automatically include that cookie, and authMiddleware extracts the token from the Authorization header, cookie, or req.body as a fallback.",
    ],
  },
  {
    title: "3. Dashboard and reports list lifecycle",
    points: [
      "After authentication, the main user landing route is /dashboard.",
      "DashboardHomePage reads state.auth.user and renders dashboard sections around that user context.",
      "The report list is user-scoped. The server queries InterviewReport.find({ user: req.user.id }) and sorts by createdAt descending before sending data back.",
      "The list response intentionally excludes resumeTxt and selfDescription during list fetches to reduce payload size for dashboard rendering.",
    ],
  },
  {
    title: "4. Report generation lifecycle",
    points: [
      "GenerateReportPage builds a multipart FormData payload containing the resume PDF file, optional selfDescription, and required jobDescription.",
      "The Redux thunk generateInterviewReport() posts to /api/interview-report/generate with Content-Type multipart/form-data.",
      "The Express route runs auth first, then the upload middleware, then createInterviewReport(). This means unauthenticated requests should fail before AI or PDF parsing work begins.",
      "The controller parses the PDF buffer into plain text, validates the extracted text, calls the AI service with normalized strings, persists the response in MongoDB, and returns the created document.",
    ],
  },
  {
    title: "5. Report viewing lifecycle",
    points: [
      "After a report is created, the frontend navigates to /reports/:reportId using the id returned by the backend.",
      "InterviewReportPage inspects the route param. If a real reportId exists, it dispatches fetchInterviewReportById(reportId). If not, it falls back to the demo report path.",
      "currentReport, currentReportLoading, and currentReportError in Redux are used to keep the page stable through loading, failure, and success states.",
      "On unmount, the page dispatches clearCurrentReport() so the next report load starts from a clean state instead of showing stale data.",
    ],
  },
  {
    title: "6. Logout and token invalidation",
    points: [
      "Logout is a protected route, so only users with a valid token can call it.",
      "The controller decodes the current JWT, stores the token in BlacklistedToken with its expiration timestamp, and clears the token cookie.",
      "The blacklist collection uses a TTL index on expiresAt, which means old invalidated tokens are automatically cleaned up by MongoDB after they expire.",
      "This prevents a stolen old cookie from remaining valid after logout, even if the JWT itself has not yet reached its natural expiry time.",
    ],
  },
];

const routes = [
  { method: "POST", path: "/api/user/create-user", purpose: "Create a new user, hash password, set auth cookie." },
  { method: "POST", path: "/api/user/login", purpose: "Validate credentials and issue auth cookie." },
  { method: "POST", path: "/api/user/logout", purpose: "Blacklist current token and clear cookie." },
  { method: "GET", path: "/api/user/me", purpose: "Return current authenticated user from req.user." },
  { method: "GET", path: "/api/interview-report", purpose: "Fetch all saved reports for the logged-in user." },
  { method: "GET", path: "/api/interview-report/:id", purpose: "Fetch one saved report owned by the current user." },
  { method: "POST", path: "/api/interview-report/generate", purpose: "Upload resume PDF and generate a new interview report." },
  { method: "DELETE", path: "/api/interview-report/:id", purpose: "Delete one report if it belongs to the current user." },
  { method: "GET", path: "/api/interview-report/demo", purpose: "Generate a demo report dynamically from temp test data." },
  { method: "GET", path: "/api/interview-report/demo-json", purpose: "Return a static demo report payload." },
  { method: "GET", path: "/api/health", purpose: "Simple health-check endpoint." },
];

const reduxNotes = [
  {
    title: "auth slice",
    detail:
      "Owns user, isAuthenticated, checkingAuth, loading, and error. This slice controls route access and the app's understanding of session state.",
  },
  {
    title: "interviewReports slice",
    detail:
      "Owns reports, currentReport, loading flags, and generation error states. It separates list loading from single-report loading so multiple report UIs can stay predictable.",
  },
  {
    title: "Thunk pattern",
    detail:
      "Both slices use createAsyncThunk, so API failures are normalized into rejectWithValue messages and can be rendered directly in the UI.",
  },
  {
    title: "State update after generate",
    detail:
      "When a new report is created, the slice updates currentReport and prepends the new report into reports while removing any duplicate id entry from the existing array.",
  },
];

const middlewarePipeline = [
  "cors() allows requests from CLIENT_URL and enables credentials so browser cookies can move with requests.",
  "express.json() parses JSON bodies for regular auth and data requests.",
  "morgan('dev') logs request activity during development.",
  "notFound handles unmatched routes after /api is mounted.",
  "errorHandler is the final safety net for thrown server errors.",
];

const authInternals = [
  "Passwords are hashed with bcrypt before a user is stored.",
  "JWTs are created with jwt.sign({ id: userId }, process.env.jwtSecret, { expiresIn: '7d' }).",
  "Cookies are configured as httpOnly and sameSite: 'lax'. secure becomes true in production.",
  "authMiddleware rejects missing, blacklisted, invalid, expired, or userless tokens before the controller runs.",
];

const dataShape = [
  "jobDescription",
  "resumeTxt",
  "selfDescription",
  "matchScore",
  "technicalQuestions",
  "behavioralQuestions",
  "skillGaps",
  "preparationPlan",
  "user",
];

const aiNotes = [
  "The AI layer lives in server/src/services/AI.service.js and currently uses GoogleGenerativeAI with the gemini-2.5-flash model.",
  "The prompt asks for strict JSON only and describes the exact structure expected by the app.",
  "The service strips markdown code fences if the model wraps the JSON in ```json blocks.",
  "The parsed JSON is validated with a Zod schema before the controller accepts it as a valid interview report payload.",
  "This Zod validation is an important guardrail because it catches malformed AI output before anything is written to MongoDB.",
];

const reportPersistenceNotes = [
  "The persistent report model is a Mongoose schema in server/src/models/interviewReport.js.",
  "technicalQuestions and behavioralQuestions are stored as nested subdocuments with question, answer, and intention.",
  "skillGaps are normalized into skill + severity, where severity must be one of low, medium, or high.",
  "preparationPlan is stored as a day-wise array with focus and string tasks.",
  "Each saved report links back to a User document through the user field.",
];

const importantFiles = [
  {
    label: "client/src/main.jsx",
    reason: "Initial React entry point. Adds router and Redux provider.",
  },
  {
    label: "client/src/App.jsx",
    reason: "Boot-level session recovery using getMe().",
  },
  {
    label: "client/src/routes/AppRoutes.jsx",
    reason: "Top-level route table for public, protected, report, and notes pages.",
  },
  {
    label: "client/src/routes/ProtectedRoute.jsx",
    reason: "Blocks private pages until auth is confirmed.",
  },
  {
    label: "client/src/routes/PublicRoute.jsx",
    reason: "Prevents authenticated users from seeing login/signup pages again.",
  },
  {
    label: "client/src/features/auth/authSlice.js",
    reason: "Redux auth thunks and state transitions.",
  },
  {
    label: "client/src/features/interviewReports/interviewReportsSlice.js",
    reason: "Redux report fetching, report generation, and current report state.",
  },
  {
    label: "client/src/API/axios.js",
    reason: "Base API client configuration, especially cookie-aware requests.",
  },
  {
    label: "server/src/server.js",
    reason: "Express app bootstrap, middleware setup, DB connection, and API mounting.",
  },
  {
    label: "server/src/routes/index.js",
    reason: "Main API route composition.",
  },
  {
    label: "server/src/controllers/userController.js",
    reason: "Signup, login, logout, and current-user logic.",
  },
  {
    label: "server/src/controllers/interviewController.js",
    reason: "PDF parsing, AI orchestration, report persistence, and demo data routes.",
  },
  {
    label: "server/src/middleware/authMiddleware.js",
    reason: "JWT verification and req.user attachment.",
  },
  {
    label: "server/src/middleware/fileMiddleware.js",
    reason: "Multipart upload parsing for resume files.",
  },
  {
    label: "server/src/services/AI.service.js",
    reason: "Prompting, model call, output extraction, and Zod validation.",
  },
  {
    label: "server/src/models/interviewReport.js",
    reason: "Persistent MongoDB schema for saved interview reports.",
  },
  {
    label: "server/src/models/interviewReportSchema.js",
    reason: "Zod schema describing the AI output contract.",
  },
  {
    label: "server/src/models/BlacklistedToken.js",
    reason: "MongoDB TTL-backed invalidated token store.",
  },
];

const caveats = [
  "server/src/controllers/authController.js appears stale and is not part of the active auth route chain.",
  "The project currently mixes dynamic demo generation and static demo JSON data, which is useful for development but can confuse future maintenance if both paths stay long-term.",
  "The server can start even if MongoDB connection fails, because startServer catches DB errors and still listens. That is convenient for local work, but protected data features will then fail at runtime.",
  "Because auth depends on cookies plus CORS credentials, frontend and backend origins must stay aligned with CLIENT_URL and the axios base URL.",
];

function ProjectNotesPage() {
  return (
    <main className="project-notes-page">
      <section className="project-notes-hero">
        <p className="project-notes-kicker">Technical Notes</p>
        <h1>Resume Tool Architecture and Flow</h1>
        <p className="project-notes-lead">
          This page is meant to be a practical engineering walkthrough of how
          this project works internally. It focuses on the real request flow,
          Redux state transitions, backend middleware order, AI integration, and
          MongoDB persistence model used by the app today.
        </p>
        <div className="project-notes-links">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/generate-report">Generate Report</a>
        </div>
      </section>

      <section className="project-notes-grid">
        <article className="project-notes-card">
          <p className="project-notes-section-label">System Summary</p>
          <h2>What the application is doing</h2>
          <p>
            This is a full-stack interview preparation tool. The frontend is a
            React + Redux application that authenticates users, accepts resume
            uploads, and renders report UIs. The backend is an Express API that
            validates auth, parses PDF resumes, calls a generative AI service,
            validates the AI output, and stores the final report in MongoDB.
          </p>
        </article>

        <article className="project-notes-card">
          <p className="project-notes-section-label">Runtime Shape</p>
          <h2>Main moving parts</h2>
          <ol className="project-notes-list">
            <li>React Router decides which page is active.</li>
            <li>Redux tracks auth state and interview report state.</li>
            <li>Axios sends API calls to `http://localhost:5001/api`.</li>
            <li>Express routes hand requests to controllers and middleware.</li>
            <li>MongoDB stores users, reports, and blacklisted tokens.</li>
            <li>Gemini generates structured interview report content.</li>
          </ol>
        </article>
      </section>

      <section className="project-notes-stack">
        <div className="project-notes-card">
          <p className="project-notes-section-label">Lifecycle</p>
          <h2>End-to-end application flow</h2>
          <div className="project-notes-flow">
            {appFlow.map((section) => (
              <div key={section.title} className="project-notes-flow-block">
                <h3>{section.title}</h3>
                <ul className="project-notes-list">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-notes-grid">
        <article className="project-notes-card">
          <p className="project-notes-section-label">Frontend</p>
          <h2>Redux and route behavior</h2>
          <div className="project-notes-mini-blocks">
            {reduxNotes.map((item) => (
              <div key={item.title} className="project-notes-mini-block">
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="project-notes-card">
          <p className="project-notes-section-label">Server Boot</p>
          <h2>Express startup sequence</h2>
          <ul className="project-notes-list">
            {middlewarePipeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            MongoDB connection is attempted before listening, but the server can
            still start if the database connection fails. That keeps local
            development flexible, though DB-backed features will not work until
            the connection succeeds.
          </p>
        </article>
      </section>

      <section className="project-notes-stack">
        <div className="project-notes-card">
          <p className="project-notes-section-label">API Surface</p>
          <h2>Routes exposed by the backend</h2>
          <div className="project-notes-route-table">
            {routes.map((route) => (
              <div key={`${route.method}-${route.path}`} className="project-notes-route-row">
                <span className="project-notes-method">{route.method}</span>
                <code>{route.path}</code>
                <p>{route.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-notes-grid">
        <article className="project-notes-card">
          <p className="project-notes-section-label">Authentication</p>
          <h2>Technical auth details</h2>
          <ul className="project-notes-list">
            {authInternals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="project-notes-card">
          <p className="project-notes-section-label">Persistence</p>
          <h2>Interview report data shape</h2>
          <div className="project-notes-chip-row">
            {dataShape.map((field) => (
              <span key={field} className="project-notes-chip">
                {field}
              </span>
            ))}
          </div>
          <ul className="project-notes-list">
            {reportPersistenceNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="project-notes-grid">
        <article className="project-notes-card">
          <p className="project-notes-section-label">AI Layer</p>
          <h2>How report generation is validated</h2>
          <ul className="project-notes-list">
            {aiNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="project-notes-card">
          <p className="project-notes-section-label">Generation Sequence</p>
          <h2>What happens on generate-report submit</h2>
          <ol className="project-notes-list">
            <li>User selects a PDF and fills the text inputs on the client page.</li>
            <li>GenerateReportPage creates FormData and dispatches the thunk.</li>
            <li>Axios posts the multipart payload to the protected backend route.</li>
            <li>authMiddleware verifies token and attaches req.user.</li>
            <li>fileMiddleware stores the uploaded file in memory and exposes req.file.</li>
            <li>interviewController validates fields and parses PDF text using PDFParse.</li>
            <li>AI.service.js generates and validates the report JSON.</li>
            <li>InterviewReport.create() persists the final report with the current user id.</li>
            <li>The created report is returned, stored in Redux, and the client navigates to its details page.</li>
          </ol>
        </article>
      </section>

      <section className="project-notes-stack">
        <div className="project-notes-card">
          <p className="project-notes-section-label">Reading Order</p>
          <h2>Best files to read for fast understanding</h2>
          <div className="project-notes-files">
            {importantFiles.map((item) => (
              <div key={item.label} className="project-notes-file-row">
                <div>
                  <strong>{item.label}</strong>
                </div>
                <span>{item.reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-notes-grid">
        <article className="project-notes-card">
          <p className="project-notes-section-label">Observations</p>
          <h2>Technical caveats and maintenance notes</h2>
          <ul className="project-notes-list">
            {caveats.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="project-notes-card">
          <p className="project-notes-section-label">Mental Model</p>
          <h2>Shortest way to think about the architecture</h2>
          <p>
            The frontend is mostly a state-driven shell around auth and report
            generation. The backend is the real orchestration layer: it owns
            identity, request validation, PDF extraction, AI output validation,
            and persistence. The most important contract in the whole project is
            the shape of the interview report, because both the UI and the
            database depend on that structure staying consistent.
          </p>
        </article>
      </section>
    </main>
  );
}

export default ProjectNotesPage;
