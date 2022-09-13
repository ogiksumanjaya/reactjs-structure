import Button from 'components/atoms/Button'
import Checkbox from 'components/atoms/Checkbox'

const LibraryComponent = () => (
  <div className="px-5">
    <h1 className="text-xl font-boldxs">Library Component</h1>
    <hr className="my-5" />

    <h1 className="text-xl font-boldxs">Button</h1>
    <div className="flex gap-3">
      <Button size="sm">Button</Button>
      <Button size="md" disabled>
        Button
      </Button>
      <Button size="lg">Button</Button>
      <Button size="sm" variant="outline">
        Button Outline
      </Button>
      <Button size="md" variant="outline" disabled>
        Button Outline
      </Button>
      <Button size="lg" variant="outline">
        Button Outline
      </Button>
    </div>

    <h1 className="text-xl font-boldxs">Checkbox</h1>
    <div className="flex gap-3">
      <Checkbox />
      <Checkbox checked label="With Label" />
    </div>
  </div>
)

export default LibraryComponent
