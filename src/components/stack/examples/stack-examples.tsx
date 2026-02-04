import { Stack } from '../index';
import { Button } from '../../button';
import { Text } from '../../text';

export const StackExamples = () => {
  return (
    <Stack gap={8} className="p-4">
      <Text variant="h1">Stack Component Examples</Text>

      {/* Basic Vertical Stack (Default) */}
      <Stack gap={4} className="border p-4 rounded-md">
        <Text variant="h3">Vertical Stack (Default)</Text>
        <Stack gap={2}>
          <div className="bg-blue-100 p-2 rounded">Item 1</div>
          <div className="bg-blue-200 p-2 rounded">Item 2</div>
          <div className="bg-blue-300 p-2 rounded">Item 3</div>
        </Stack>
      </Stack>

      {/* Horizontal Stack */}
      <Stack gap={4} className="border p-4 rounded-md">
        <Text variant="h3">Horizontal Stack (Row)</Text>
        <Stack direction="row" gap={4} align="center">
          <Button variant="primary">Button 1</Button>
          <Button variant="outline">Button 2</Button>
          <Button variant="ghost">Button 3</Button>
        </Stack>
      </Stack>

      {/* Alignment & Justification */}
      <Stack gap={4} className="border p-4 rounded-md">
        <Text variant="h3">Alignment & Justification</Text>
        <Stack 
          direction="row" 
          justify="between" 
          align="center" 
          className="bg-gray-50 p-4 rounded-md"
        >
          <Text>Left</Text>
          <Text>Center</Text>
          <Text>Right</Text>
        </Stack>
      </Stack>

      {/* Nesting Stacks */}
      <Stack gap={4} className="border p-4 rounded-md">
        <Text variant="h3">Nested Stacks</Text>
        <Stack direction="row" gap={8}>
          <Stack gap={2} className="w-1/2">
            <Text variant="h4">Sidebar</Text>
            <div className="h-20 bg-gray-100 rounded">Menu</div>
          </Stack>
          <Stack gap={4} className="w-1/2">
            <Text variant="h4">Content</Text>
            <Stack direction="row" gap={2}>
              <div className="flex-1 h-20 bg-green-100 rounded">Box A</div>
              <div className="flex-1 h-20 bg-green-100 rounded">Box B</div>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      
      {/* Wrapping */}
      <Stack gap={4} className="border p-4 rounded-md">
        <Text variant="h3">Wrapping</Text>
        <Stack direction="row" wrap gap={2}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="bg-purple-100 p-2 rounded w-20 text-center">
              Item {i + 1}
            </div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
