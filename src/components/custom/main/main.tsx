import { Label } from "@/components/ui/label";
import FormWrapper from "../formWrapper/formWrapper";
import "./main.css";
import CommitSection from "../commitSection/commitSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_DATA } from "./constant";
import { ICommitData, IFormData } from "@/types/common";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

const Main = () => {
  const { toast } = useToast();
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

      const mappedData: ICommitData[] = data.map((current: any) => ({
        date: current.commit.committer.date ?? "",
        author: current.commit.author.name ?? "",
        link: current.html_url ?? "",
      }));
      setData(mappedData);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch data",
      });
    }
  };

  const handleSubmit = (formData: IFormData) => {
    setData([]);
    fetchCommits(formData);
  };

  return (
    <>
      <div className="main">
        <div className="main-heading-wrapper">
          <Label className="main-heading">Commit Finder</Label>
        </div>
        <div className="main-wrapper">
          <div className="main-left">
            <FormWrapper onSubmit={handleSubmit} />
          </div>
          <div className="main-right">
            <CommitSection data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
