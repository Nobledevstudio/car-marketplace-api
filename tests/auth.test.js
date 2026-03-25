import request from "supertest";
import app from "../server.js";


describe("Auth API", () => {
  test("user can login", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "admin@carmarketplace.com",
        password: "Admin@123"
      });

    expect(res.statusCode).toBe(200);

    // fix here: token is inside res.body.data
    expect(res.body.data).toHaveProperty("token");
    expect(res.body.success).toBe(true);
  });
});
