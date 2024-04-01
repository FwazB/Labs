import { BaseGif } from "../models/BaseGif";
import { Result } from "./Result";
import "../css/ResultsList.css";

interface ResultsListProps {
  images: BaseGif[];
}

export function ResultsList({ images }: ResultsListProps) {
  return (
    <div className="ResultsList">
      {images.map((image, i) => (
        <Result key={image.id + i} image={image} />
      ))}
    </div>
  );
}
