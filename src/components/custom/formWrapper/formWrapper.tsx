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

  const today = new Date().toISOString().slice(0, 10);

  let startMin = "";
  if (endDate) {
    let endDateMinus30 = new Date(endDate);
    endDateMinus30.setDate(endDateMinus30.getDate() - 29);
    let endDateMinus30String = endDateMinus30.toISOString().slice(0, 10);
    startMin = endDateMinus30String;
    if (new Date(endDateMinus30String) > new Date(today)) {
      startMin = today;
    }
  }

  let startMax = today;
  if (endDate) {
    startMax = new Date(endDate).toISOString().slice(0, 10);
  }

  let endMin = "";
  if (startDate) {
    endMin = new Date(startDate).toISOString().slice(0, 10);
  }

  let endMax = today;
  if (startDate) {
    let startDatePlus30 = new Date(startDate);
    startDatePlus30.setDate(startDatePlus30.getDate() + 29);
    let startDatePlus30String = startDatePlus30.toISOString().slice(0, 10);
    endMax = startDatePlus30String;
    if (new Date(startDatePlus30String) > new Date(today)) {
      endMax = today;
    }
  }

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
              min={startMin}
              max={startMax}
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
              min={endMin}
              max={endMax}
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
