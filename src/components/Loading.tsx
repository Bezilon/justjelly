import { GridLoader } from "react-spinners";

export default function Loading({
  color = "#36d7b7",
  loading = true,
  cssOverride = {},
  size = 150
}) {
  return <GridLoader
    color={color}
    loading={loading}
    cssOverride={cssOverride}
    size={size}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
}