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
        {data.length === 0 && (
          <div>
            <Label>No Commits yet</Label>
          </div>
        )}
        {data.length > 0 && (
          <>
            <div>
              <Label className="commit-title">Commits Found</Label>
            </div>
            <div className="commit-table-wrapper">
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
          </>
        )}
      </div>
    </>
  );
};

export default CommitSection;
