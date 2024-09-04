import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import "./commitSection.css";
import { Label } from "@/components/ui/label";
import { ICommitData } from "@/types/common";
import { formatDate } from "@/utils/common";

interface IProps {
  data: ICommitData[];
}

const CommitSection = (props: IProps) => {
  const { data } = props;
  return (
    <>
      <div className="commit-wrapper">
        <div>
          <Label className="commit-title">Commits Found</Label>
        </div>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((current) => (
                <TableRow key={current.link}>
                  <TableCell>{formatDate(current.date)}</TableCell>
                  <TableCell>{current.author}</TableCell>
                  <TableCell>
                    <a href={current.link}>Link</a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

// Table,
// TableHeader,
// TableBody,
// TableFooter,
// TableHead,
// TableRow,
// TableCell,
// TableCaption,

export default CommitSection;
