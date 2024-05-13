1. If you were given 2 weeks time, what changes would you make to the project to enhance code quality, UX, performance, or scalability. This should not take more than ~15 minutes.

- Use React Hook Form for managing prompt form
- Send prompt on Enter key instead of manually clicking "Send" button
- Show loading status while getting data from websocket
- Show "Stop" button instead of "Send" button while the data is being fetched from websocket
- Use Tankstack Query for the part making rest api if any
- The frontend uses `backend/utils/RRM2HTML` now, and will make it a shared module for both backend & frontend
- Sanitize socket response using https://www.npmjs.com/package/isomorphic-dompurify
- Switch to typescript
- More detailed error handling in frontend, backend
- Move host url to .env instead of hardcoding it
- Write unit test for all parts

2. Anything you'd like us to know about your submission? If any instructions were unclear or you encountered problems in the provided code please let us know.

n/a