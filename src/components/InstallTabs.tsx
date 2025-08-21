import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "./CodeBlock";

export const InstallTabs = () => {
  return (
    <Tabs defaultValue="bun" className="w-full max-w-2xl">
      <TabsList className="grid w-full grid-cols-3 bg-card border border-border">
        <TabsTrigger
          value="bun"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-muted/50 hover:text-foreground data-[state=active]:hover:bg-primary transition-all duration-200 ease-in-out"
        >
          bun
        </TabsTrigger>
        <TabsTrigger
          value="npm"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-muted/50 hover:text-foreground data-[state=active]:hover:bg-primary transition-all duration-200 ease-in-out"
        >
          npm
        </TabsTrigger>
        <TabsTrigger
          value="pnpm"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-muted/50 hover:text-foreground data-[state=active]:hover:bg-primary transition-all duration-200 ease-in-out"
        >
          pnpm
        </TabsTrigger>
      </TabsList>
      <TabsContent value="bun" className="mt-4">
        <CodeBlock code="bun add -g @loggipop/lpop" />
      </TabsContent>
      <TabsContent value="npm" className="mt-4">
        <CodeBlock code="npm install -g @loggipop/lpop" />
      </TabsContent>
      <TabsContent value="pnpm" className="mt-4">
        <CodeBlock code="pnpm add -g @loggipop/lpop" />
      </TabsContent>
    </Tabs>
  );
};
