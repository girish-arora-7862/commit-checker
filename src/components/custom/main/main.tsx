import { Label } from "@/components/ui/label";
import FormWrapper from "../formWrapper/formWrapper";
import "./main.css";
import CommitSection from "../commitSection/commitSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_DATA } from "./constant";
import { ICommitData, IFormData } from "@/types/common";

const Main = () => {
  const [data, setData] = useState<ICommitData[]>([]);
  const fetchCommits = async (formData: IFormData) => {
    let endDate = new Date(formData.endDate);
    endDate.setDate(endDate.getDate() + 1);
    try {
      const result = await axios({
        method: "get",
        url: `https://api.github.com/repos/${formData.repoName}/commits`,
        params: {
          since: new Date(formData.startDate).toISOString(),
          until: new Date(endDate).toISOString(),
        },
      });
      const data = result.data;

      //   const data = API_DATA;
      console.log({ data });
      const mappedData: ICommitData[] = data.map((current: any) => {
        return {
          date: current.commit.committer.date ?? "",
          author: current.commit.author.name ?? "",
          link: current.html_url ?? "",
        };
      });
      console.log("mappedData", mappedData);
      setData(mappedData);
      //   console.log(data, data2);
      //   console.log(JSON.stringify(data) === JSON.stringify(data2));
    } catch (error) {}
  };

  useEffect(() => {}, []);

  const handleSubmit = (formData: IFormData) => {
    fetchCommits(formData);
  };

  return (
    <>
      <div className="main">
        <div className="main-heading-wrapper">
          <Label className="main-heading">Commit Finder</Label>
        </div>
        <div className="main_wrapper">
          <div className="main_left">
            <FormWrapper onSubmit={handleSubmit} />
          </div>
          <div className="main_right">
            <CommitSection data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
