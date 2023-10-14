const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app");

chai.should();
chai.use(chaiHttp);

describe("App Unit Testing", () => {
  describe("GET Method Testing Case", () => {
    it("All Subscriber Detais", (done) => {
      chai
        .request(app)
        .get("/subscribers")
        .end((err, res) => {
          if (err) {
            console.log(err);
          } else {
            res.should.have.status(200);
          }
        });

      done();
    });
  });
  describe("GET Method Testing Case ", () => {
    it("Fetch All Subscriber Name And Chanal", (done) => {
      chai
        .request(app)
        .get("/subscribers/names")
        .end((err, res) => {
          if (err) {
            console.log(err);
          } else {
            res.should.have.status(200);
          }
        });

      done();
    });
  });
  describe("GET Method Testing Case", () => {
    it("Fetch Subscriber Dettails with Matched ID", (done) => {
      const id = "652a76cda4400381906578ce";
      chai
        .request(app)
        .get("/subscribers/" + id)
        .end((err, res) => {
          if (err) {
            console.log(err);
          } else {
            res.should.have.status(200);
          }
        });

      done();
    });
  });
});
