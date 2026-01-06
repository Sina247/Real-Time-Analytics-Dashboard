import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import InputGroup from "@/components/form/form-elements/InputGroup";
import InputStates from "@/components/form/form-elements/InputStates";
import RadioButtons from "@/components/form/form-elements/RadioButtons";
import SelectInputs from "@/components/form/form-elements/SelectInputs";
import ToggleSwitch from "@/components/form/form-elements/ToggleSwitch";
import DropzoneComponent from "@/components/form/form-elements/DropZone";
import TextAreaInput from "@/components/form/form-elements/TextAreaInput";
import DefaultInputs from "@/components/form/form-elements/DefaultInputs";
import FileInputExample from "@/components/form/form-elements/FileInputExample";
import CheckboxComponents from "@/components/form/form-elements/CheckboxComponents";

export default function FormElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="From Elements" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />

          <SelectInputs />

          <TextAreaInput />

          <InputStates />
        </div>

        <div className="space-y-6">
          <InputGroup />
          
          <FileInputExample />

          <CheckboxComponents />

          <RadioButtons />

          <ToggleSwitch />

          <DropzoneComponent />
        </div>
      </div>
    </div>
  );
}
