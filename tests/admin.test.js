
import request from 'supertest'
import app from '../server'

test("Admin can get all users", async () => {

  // login as admin first
  const loginRes = await request(app)
    .post("/api/auth/login")
    .send({
      email: "admin@carmarketplace.com",
      password: "Admin@123"
    });

  const token = loginRes.body.data.token;

  const res = await request(app)
    .get("/api/admin/users")
    .set("Authorization", `Bearer ${token}`);

  expect(res.statusCode).toBe(200);
});