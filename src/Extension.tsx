import Configuration from "@/Configuration";
import StageDefinition from "@/StageDefinition";

const Extension: React.FC<ExtensionProps> = ({
  config,
  extensionName,
  stageDefinition,
}) => {
  return (
    <div className="max-h-[calc(100vh-116px)] overflow-y-auto flex flex-col gap-4">
      <h1 className="text-xl font-semibold">{extensionName}</h1>
      {config && <Configuration config={config} />}
      {stageDefinition && <StageDefinition stageDefinition={stageDefinition} />}
    </div>
  );
};

export default Extension;
