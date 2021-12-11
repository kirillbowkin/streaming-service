package mma.boys.chat.controllers;

import mma.boys.chat.models.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;

import java.util.UUID;


@org.springframework.stereotype.Controller
public class Controller {

    @MessageMapping("/send")
    @SendTo("/topic/chat")
    public Message send(Message message, SimpMessageHeaderAccessor ha) {
        message.setId(UUID.randomUUID());

        // log.info("{} from ip: {} sent message: {}", message.getSender(), ha.getSessionAttributes().get("ip"),
                // message.getText());
        return message;
    }

}
