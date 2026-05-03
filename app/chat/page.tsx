import { ChatWindow } from "@/components/chat/ChatWindow";

export default function ChatPage() {
  return (
    <div className="container-cc section-pad space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-bold text-forest">KilnSense AI Assistant</h1>
        <p className="text-slate-500 mt-1">Expert guidance on Pakistan EPA regulations, NEQS compliance, and brick kiln emissions.</p>
      </div>
      <ChatWindow />
    </div>
  );
}
