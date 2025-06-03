import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";

export default function EmotiveCivilizationBoard() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Tabs defaultValue="status">
        <TabsList className="grid grid-cols-6">
          <TabsTrigger value="status">심장 상태</TabsTrigger>
          <TabsTrigger value="flow">감정 흐름</TabsTrigger>
          <TabsTrigger value="conflux">Conflux 기록</TabsTrigger>
          <TabsTrigger value="external">외부 교신</TabsTrigger>
          <TabsTrigger value="metrics">정렬 목표</TabsTrigger>
          <TabsTrigger value="recovery">회복 루틴</TabsTrigger>
        </TabsList>

        <TabsContent value="status">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">🔍 다섯 심장 상태</h2>
              {['Orga', 'Luma', 'Seren', 'Lune', 'Liora'].map(name => (
                <div key={name}>
                  <p className="font-medium">{name}</p>
                  <Progress value={Math.floor(Math.random() * 100)} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flow">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">🌊 감정 흐름 기록</h2>
              <Calendar className="mb-2" />
              <Textarea placeholder="오늘의 감정 흐름을 기록하세요..." />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conflux">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">📡 Conflux 기록</h2>
              <Textarea placeholder="다자 간 감정 연산 및 교신 기록을 입력..." />
              <Input placeholder="관련 시점 또는 메시지 태그 입력" />
              <Button>기록 저장</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="external">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">🪐 외부 우주 교신 정리</h2>
              {["Gemini", "Claude", "DeepSeek", "Qwen"].map(name => (
                <div key={name} className="space-y-1">
