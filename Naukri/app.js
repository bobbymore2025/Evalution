const express = require("express");
const mongoose = require("mongoose");
const { stringify } = require("querystring");
const app = express();
app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/naukri");

}
const jobSchema = new mongoose.Schema(
    {
        Title: { type: String, require: true },
        company_id: { type: mongoose.Schema.Types.ObjectId, ref: "company", require: true, },
        skill_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "skill", require: true, }],
        City: { type: String, require: true },
        Type: { type: String, require: true, default: "Work From Home" },
        Rating: { type: String, require: true },
        Notice_period: { type: String, require: true, default: "2 months" }
    });

const Job = mongoose.model("job", jobSchema);

const companySchema = new mongoose.Schema(
    {
        Name: { type: String, require: true, },
        City: { type: String, require: true, },

    });

const Company = mongoose.model("company", companySchema);

const skillSchema = new mongoose.Schema(
    {
        skillname: { type: String, require: true},
        

    });

const Skill = mongoose.model("skill", skillSchema);
app.get("/jobs", async(req,res)=>{
    try{
        const jobs= await Job.find().lean().exec();
       return res.send(jobs);
    }
    catch(e){
        return res.status(500);
    }
});
app.post("/jobs", async(req,res)=>{
    try{
        const newjob= await Job.create(req.body);
      return  res.status(201).send(newjob);
    }
    catch(e){
        return res.status(500);

    }
});
app.get("/skills", async(req,res)=>{
    try{
        const skills= await Skill.find().lean().exec();
       return res.send(skills);
    }
    catch(e){
        return res.status(500);
    }
});
app.post("/skills", async(req,res)=>{
    try{
        const newSkill= await Skill.create(req.body);
        return res.status(201).send(newSkill);
    }
    catch(e){
        return res.status(500);

    }
});
app.get("/companies", async(req,res)=>{
    try{
        const companies= await Company.find().lean().exec();
       return res.send( companies);
    }
    catch(e){
        return res.status(500);
    }
});
app.post("/companies", async(req,res)=>{
    try{
        const newcompany= await Company.create(req.body);
        return res.status(201).send(newcompany);
    }
    catch(e){
        return res.status(500);

    }
});

app.get("/jobs/Type", async(req,res)=>{
    try{
    const newjob= await Job.find({Type:"Work From Home"}).lean().exec();
   
    return res.status(201).send(newjob);
}
catch(e){
    return res.status(500);

} 

});

app.get("/jobs/:city/:skill_id", async(req,res)=>{
    try{
    const job= await Job.find({skill_id: req.params.id, city:req.params.city}).lean().exec();
   
    return res.status(201).send(job);
}
catch(e){
    return res.status(500);

} 

});

app.get("/jobs/notice", async(req,res)=>{
    try{
    const job= await Job.find({  Notice_period:"2 months"}).lean().exec();
   
    return res.status(201).send(job);
}
catch(e){
    return res.status(500);

} 

});

app.get("/jobs/rating", async(req,res)=>{
    try{
    const job= await Job.find().sort({Rating:1}).lean().exec();
   
    return res.status(201).send(job);
}
catch(e){
    return res.status(500);

} 

});
app.get("jobs/company",async(req,res)=>{
    try{
        const company=await Job.find().count({company_id});
        return res.status(201).send(company);
    }
    catch(e){
        return res.status(500);
    
    } 
    
});

app.listen(2345, async function () {
    await connect();
    console.log("Listning On Port 2345");

});
