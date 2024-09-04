import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "./formWrapper.css";
import { useState } from "react";
import { IFormData } from "@/types/common";

interface IProps {
  onSubmit: (value: IFormData) => void;
}

const FormWrapper = (props: IProps) => {
  const { onSubmit } = props;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [repoName, setRepoName] = useState("");

  const handleSubmit = () => {
    onSubmit({ startDate, endDate, repoName });
  };

  return (
    <>
      <div className="form-wrapper">
        <div>
          <Label className="form-title">Search Commits</Label>
        </div>
        <div className="form-description">
          <Label>Find commits for a given repository between date range</Label>
        </div>
        <div className="form-field">
          <div>
            <Label>Start Date</Label>
          </div>
          <div>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
        </div>
        <div className="form-field">
          <div>
            <Label>End Date</Label>
          </div>
          <div>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="form-field">
          <div>
            <Label>Repositories</Label>
          </div>
          <div>
            <Input
              type="text"
              value={repoName}
              onChange={(e) => setRepoName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Button
            disabled={!repoName || !startDate || !endDate}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormWrapper;
