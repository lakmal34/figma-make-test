import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Stack } from "./components/Stack";

export default function App() {
  return (
    <Stack>
      <Card
        title="Morning Playlist"
        description="Your personalized mix"
      />

      <Button variant="primary">
        Play Now
      </Button>

      <Button variant="secondary">
        Save
      </Button>
    </Stack>
  );
}